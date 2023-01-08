# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




## 1. cài thư viện react-router-dom 
- npm i react-router-dom
## 2. React bootstrap 
- cài thư viện react-bootstrap  -> npm i react-bootstrap
- cài bootstrap -> npm i bootstrap
## 3. link file css
- import 'bootstrap/dist/css/bootstrap.min.css';

# Design Header vs Bootstrap Navigation
1. check out new branch 

# Điều hướng trang với LINK 
- 1. import { BrowserRouter, Route, Routes } from "react-router-dom";   ---> index.js 
- 2. import { Link } from 'react-router-dom'    ---> App.js 



# 1. dùng thư viện <kbd>Router</kbd> 
```js
// nói cho react router biết mỗi lần người dùng vào link, thì render ra element nào 
<Routes>
      <Route path="/" element={ <App /> }/>
      <Route path="users" element={ <User /> }/>
      <Route path="admins" element={ <Admin /> }/>
</Routes>
```

# 2. Cách dùng thẻ <kbd>Router</kbd>
```js
// dùng thẻ Link để điều hướng người dùng đến
// link - '/users' or '/admins' 
// Còn việc render ra cái gì thì đã được khai báo như block code ở trên 
// dùng thẻ Link của Thư viện React sẽ không bị load lại trang 
<button>
    <Link to="/users" > Go to user page</Link>  
</button>
<button>
    <Link to="/admins" >Go to admin page</Link>
</button>
```

# 3. Dùng thẻ <kbd>Link</kbd> sẽ bị mất CSS của bootstrap, do đó làm cách sau
```js

// bản chất của thẻ Nav.Link trong bootstrap là chèn class = "nav-link"
<Nav.Link to="/home">Home</Nav.Link>
<Nav.Link to="/admins">Admin</Nav.Link>
<Nav.Link to="/users">User</Nav.Link> 

// do đó nếu thay thành thẻ Link của thư viện React thì thêm className="nav-link"
<Link to="/" className='nav-link'>Home</Link>
<Link to="/users" className='nav-link'>Admin</Link>
<Link to="/admins" className='nav-link'>Home</Link>

```

# 4. NESTED ROUTE 
- DÙNG ĐỂ CỐ ĐỊNH CÁC COMPONENT KHÔNG BỊ MẤT KHI NAVIGATE, CHỈ NAVIGATE TỚI COMPONENT CẦN RENDER 
```JS
// I. Component Cha Bọc Component Con
// App.js bọc các thằng con 
// những thằng con sẽ kế thừa cha 
// và muốn dùng phải khai báo nơi nào muốn render thằng con 
<Route path="/" element={ <App /> }>
    <Route path="users" element={ <User /> }/>
    <Route path="admins" element={ <Admin /> }/>
</Route>

// II. Sử Dụng trong Function App.js 
//  ===> dùng công cụ Outlet 
// mỗi lần vào đường Link nào thì Component Con Lập tức thay thế vào phần <Outlet />

// nhờ có sự lồng nhau giữa các Route thì mới chia sẻ được những phần dùng chung 
function App() {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div class='main-container'>
        <div className='sidenav-container'>

        </div>
        <div className='app-content'>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
```

# 5. Active Link Styling
```js
- import { NavLink } from "react-router-dom";

// muốn dùng Component NavLink để active phải đổi Hết Link -> NavLink 
<Link to="/" className='nav-link'>Home</Link>
<Link to="/users" className='nav-link'>Admin</Link>
<Link to="/admins" className='nav-link'>Home</Link>

// 
<NavLink to="/" className='nav-link'>Home</NavLink>
<NavLink to="/users" className='nav-link'>User</NavLink>
<NavLink to="/admins" className='nav-link'>Admin</NavLink>

// ghi đè thuộc tính CSS của bootstrap  - đi từ cha đến con 
.app-container {
  .header-container {

    // .navbar-nav {
    //   .nav-link.active {
    //     color: red
    //   }
    // }
    
    .navbar-nav {
      .nav-link {
        &.active {
          color: red
        }
      }
    }


    // --> scss không làm như này 
    // .navbar-nav .nav-link.active {
    //   color: red
    // }
  }
}
```
# 6. Index Routes 
- khi vào đường link của thằng cha và muốn render ra một cái gì đấy thay vì chống trơn 
```js
// trang home vô tình trùng mất với thằng cha  '/'
// và một Route đặc biệt không chứa path 
// <Outlet /> sẽ đợi Link navigate để nhận path, nhưng nếu không có path nào match 
// thì sẽ bê index vào <Outlet />
// chứa property index để nói cho 
<Route path="/" element={ <App /> }>
    <Route index element={ <HomePage/> }/>
    <Route path="users" element={ <User /> }/>
    <Route path="admins" element={ <Admin /> }/>
</Route>
```

#  Setup Axios, React Toastify, React Paginate
- Setup Axios
  - gọi api 
- React Toastify
  - hiển thị thông báo 
- React Paginate
  - phân trang ứng dụng 

## lưu ý CSS cho modal Bootstrap
- lý do modal nằm ngoài root 


## function dùng gọi api việc thao tác với database tốn thời gian 
- do đó dùng async 