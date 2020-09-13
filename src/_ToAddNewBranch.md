### Steps to add new routes

  1. Create a `<Route path="/{ROUTE NAME}" render={() => <Item searchTerm="{ROUTE NAME}" />} />` inside the App.js file above or below the existing routes
  2. Do the same in the **components/Navigation.js** file `<li><NavLink to="/{ROUTER NAME}">{ROUTER NAME}</NavLink></li>`