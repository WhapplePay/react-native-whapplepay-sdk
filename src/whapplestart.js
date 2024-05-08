import axios from 'axios';

class WhapplePaySDK {
  constructor() {
    this.baseURL = 'https://api.whapplepay.com/';
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  async processPayment(amount, currency, paymentMethod, clientId, clientSecret, phoneNumber) {
    try {
      const data = {
        amount,
        currency,
        paymentMethod,
        redirectUrls: {
          successUrl: 'http://example.com/success',
          cancelUrl: 'http://example.com/cancel',
        },
        clientId,
        clientSecret,
        phoneNumber,
      };
  
      const response = await this.makeApiCall('POST', 'payments', data);
      const responseData = response.data.message;
  
      if (response.data.status === 200 && responseData && responseData.transaction && responseData.status === 'Success') {
        return {
          success: true,
          transactionId: responseData.transaction.id,
          message: responseData.message,
        };
      } else {
        return {
          success: false,
          error: responseData && responseData.message ? responseData.message : 'Payment failed.',
        };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  
  async withdrawMoney(amount, currency, withdrawMethod, clientId, clientSecret) {
    try {
      const data = {
        amount,
        currency,
        withdrawMethod,
        clientId,
        clientSecret,
      };

      const response = await this.makeApiCall('POST', 'withdrawals', data);
      return response.data; 
    } catch (error) {
      return { error: error.message };
    }
  }

  async depositMoney(amount, currency, depositMethod, clientId, clientSecret) {
    try {
      const data = {
        amount,
        currency,
        depositMethod,
        clientId,
        clientSecret,
      };

      const response = await this.makeApiCall('POST', 'deposits', data);
      return response.data; 
    } catch (error) {
      return { error: error.message };
    }
  }

  async checkPaymentStatus(transactionId, clientId, clientSecret) {
    try {
      const data = {
        transactionId,
        clientId,
        clientSecret,
      };

      const response = await this.makeApiCall('POST', 'payments/status', data);
      return response.data; 
    } catch (error) {
      return { error: error.message };
    }
  }

  async makeApiCall(method, endpoint, data = {}) {
    try {
      const response = await axios({
        method,
        url: this.baseURL + endpoint,
        headers: this.headers,
        data,
      });

      return response;
    } catch (error) {
      throw new Error('API request failed: ' + error.message);
    }
  }
}

export default WhapplePaySDK;
