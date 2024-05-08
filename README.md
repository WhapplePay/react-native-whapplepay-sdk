
# WPReactSDK

## Overview

WPReactSDK is a library that allows you to seamlessly integrate WhapplePay's secure payment gateway into your React Native applications. By using this SDK, you can enhance user experience, process payments securely, and optimize checkout flows with WhapplePay's reliable tools tailored specifically for React Native environments.

## Features

- Securely process payments using WhapplePay.
- Seamlessly integrate WhapplePay's payment gateway into React Native apps.
- Enhance user trust and satisfaction with reliable payment processing.
- Optimize checkout flows for a smooth user experience.

## Installation

To install WPReactSDK, use npm or yarn:

```bash
npm install wpreactsdk
```

or

```bash
yarn add wpreactsdk
```

## Usage

1. Import WPReactSDK into your React Native project:

```javascript
import WhapplePay from 'wpreactsdk';
```

2. Initialize WhapplePay with your API keys:

```javascript
const whapplePay = new WhapplePay({
  apiKey: 'YOUR_API_KEY_HERE',
  secretKey: 'YOUR_SECRET_KEY_HERE',
});
```

3. Use WhapplePay methods to process payments:

```javascript
whapplePay.processPayment({
  amount: 500, // Amount to be charged
  currency: 'USD', // Currency code
  // Other payment details as needed
}).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

For detailed API documentation and examples, refer to the [API Reference](https://github.com/WhapplePay/react-native-whapplepay-sdk/blob/main/API_REFERENCE.md).

## API Reference

For detailed information about WPReactSDK's API methods and usage examples, please refer to the [API Reference](https://github.com/WhapplePay/react-native-whapplepay-sdk/blob/main/API_REFERENCE.md).

## Contributing

Contributions to WPReactSDK are welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-branch-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-branch-name`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/WhapplePay/react-native-whapplepay-sdk/blob/main/LICENSE) file for details.

## Support

For any questions or issues regarding WPReactSDK, please [open an issue](https://github.com/WhapplePay/react-native-whapplepay-sdk/issues) on GitHub or contact our support team at support@whapplepay.com.

---

After creating this README file, save it as `README.md` in the root directory of your package. Make sure to replace placeholders like `YOUR_API_KEY_HERE` and `YOUR_SECRET_KEY_HERE` with actual values or instructions for developers to fill in their API keys. Then, include this `README.md` file in your package when publishing it to npm or yarn.