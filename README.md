<p align="center">
  <a>
    <img width="100px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/icon.png">
  </a>
  <h1 align="center">Spree - React Native</h1>  
</p>


## Features

- Products Search Feature.
- Products List 
  - Infinite Scroll Feature
  - Listing based on categories
  - Sorting High to Low & vice versa
  - Filter based on Size & Price Range
- Product
  - Selection based on Size & Color
  - Save for Later feature
  - Add to Bag feature
- Bag
  - Remove Product
  - Increment/ Decrement Product Quantity
  - Checkout

## Screenshots

### Android
<div style="display: flex; flex-wrap: wrap">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/splash.png"> <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/onboarding1.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/onboarding2.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/onboarding3.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/login.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/register.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/forget-password.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/home.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/drawer-navigator.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/products-list.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/products-sorting.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/products-filter.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/product-detail-screen.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/favourites.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/categories.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/bag.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/checkout-shipping-address.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/checkout-payment.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/checkout-success.png">
  <img width="288px" src="https://github.com/BlueBash/spree-react-native/raw/products-api/assets/images/screenshots/profile.png">
</div>

## Development

```bash
# Server Setup
rails s

rails s -b 0.0.0.0 (Enables server to accept requests from any network interface while enables no special hosting configuration for emulators)

# Remote/ Local Host Setup
Search & Replace all occurences of Remote/ Local Host (for example: http://192.168.1.25:3000)

# Dependencies
sudo yarn install

# Run iOS
sudo yarn ios

# Run Android
sudo yarn android

```