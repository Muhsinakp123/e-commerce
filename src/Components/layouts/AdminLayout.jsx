// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// // Icons
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import InventoryIcon from "@mui/icons-material/Inventory";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import PaymentIcon from "@mui/icons-material/Payment";
// import SettingsIcon from "@mui/icons-material/Settings";
// import AssessmentIcon from "@mui/icons-material/Assessment";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
// import LogoutIcon from "@mui/icons-material/Logout";
// import StorefrontIcon from "@mui/icons-material/Storefront";

// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

// import { useNavigate, useLocation, Outlet } from "react-router-dom";
// import { getFromLocalStorage } from "../../utils/helpers";

// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
//   justifyContent: "space-between",
// }));

// function AdminLayout() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();

//   //  Menu Items with paths
//   const mainMenu = [
//     { text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
//     { text: "Order", icon: <ShoppingCartIcon />, path: "/admin/orders" },
//     { text: "Products", icon: <InventoryIcon />, path: "/admin/products" },
//     { text: "Shipping", icon: <LocalShippingIcon />, path: "/admin/shipping" },
//   ];

//   const secondaryMenu = [
//     { text: "Payment", icon: <PaymentIcon />, path: "/admin/payment" },
//     { text: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
//     { text: "Report", icon: <AssessmentIcon />, path: "/admin/report" },
//   ];

//   const bottomMenu = [
//     { text: "Help", icon: <HelpOutlineIcon />, path: "/admin/help" },
//     { text: "Logout", icon: <LogoutIcon />, path: "/logout" },
//   ];

//   const allMenus = [...mainMenu, ...secondaryMenu, ...bottomMenu];

//   // Active item comes from current URL
//   const activeItem =
//     allMenus.find((item) => location.pathname.startsWith(item.path))?.text ||
//     "Dashboard";

//   const handleDrawerOpen = () => setOpen(true);
//   const handleDrawerClose = () => setOpen(false);

//   //  Render Menu with navigation + active state
//   const renderMenu = (menu) =>
//     menu.map((item) => (
//       <ListItem key={item.text} disablePadding>
//         <ListItemButton
//           onClick={() => navigate(item.path)}
//           sx={{
//             borderRadius: "12px",
//             mx: 1,
//             my: 0.5,
//             backgroundColor:
//               activeItem === item.text
//                 ? "rgba(255,255,255,0.3)"
//                 : "transparent",
//             "&:hover": {
//               backgroundColor: "rgba(255,255,255,0.2)",
//             },
//           }}
//         >
//           <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
//           <ListItemText
//             primary={item.text}
//             sx={{
//               fontWeight: activeItem === item.text ? "bold" : "normal",
//               color: "white",
//             }}
//           />
//         </ListItemButton>
//       </ListItem>
//     ));

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: "none" }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             Dashboard 
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer */}
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             display: "flex",
//             flexDirection: "column",
//             boxSizing: "border-box",
//             background: "linear-gradient(180deg, #1e3c72, #2a5298)",
//             color: "white",
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         {/* Drawer Header */}
//         <DrawerHeader
//           sx={{
//             borderBottom: "1px solid rgba(255,255,255,0.2)",
//             px: 2,
//             py: 1.5,
//           }}
//         >
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <StorefrontIcon sx={{ fontSize: 26, mr: 1, color: "white" }} />
//             <Typography variant="h6" noWrap sx={{ fontWeight: "bold" }}>
//               E-Commerce
//             </Typography>
//           </Box>
//           <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
//             {theme.direction === "ltr" ? (
//               <ChevronLeftIcon />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>

//         {/* Menus */}
//         <List sx={{ mt: 2 }}>{renderMenu(mainMenu)}</List>
//         <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
//         <List>{renderMenu(secondaryMenu)}</List>
//         <Box sx={{ flexGrow: 1 }} />
//         <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
//         <List>{renderMenu(bottomMenu)}</List>
//       </Drawer>

//       {/* Main Content */}
//       <Main open={open}>
//         <DrawerHeader />
//         <Outlet />
//       </Main>
//     </Box>
//   );
// }

// const AuthorizedAdminLayout = () => {
//   const [role, setRole] = React.useState(null);

//   React.useEffect(() => {
//     const userData = getFromLocalStorage("user_data");
//     setRole(JSON.parse(userData).role);
//   }, []);

//   if (!role) {
//     return <p>redirect to login page</p>;
//   } else if (role === "admin") {
//     return <AdminLayout />;
//   } else {
//     return <p>Unauthorized user</p>;
//   }
// };

// export default AuthorizedAdminLayout;



import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import StorefrontIcon from "@mui/icons-material/Storefront";

// Extra for dropdown
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { getFromLocalStorage } from "../../utils/helpers";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

function AdminLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // dropdown states
  const [openOrders, setOpenOrders] = React.useState(false);
  const [openProducts, setOpenProducts] = React.useState(false);

  // auto expand when on child route
  React.useEffect(() => {
    if (location.pathname.startsWith("/admin/orders")) {
      setOpenOrders(true);
    }
    if (location.pathname.startsWith("/admin/products")) {
      setOpenProducts(true);
    }
  }, [location.pathname]);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // Menus without dropdowns
  const secondaryMenu = [
    { text: "Shipping", icon: <LocalShippingIcon />, path: "/admin/shipping" },
    { text: "Payment", icon: <PaymentIcon />, path: "/admin/payment" },
    { text: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
    { text: "Report", icon: <AssessmentIcon />, path: "/admin/report" },
  ];

  const bottomMenu = [
    { text: "Help", icon: <HelpOutlineIcon />, path: "/admin/help" },
    { text: "Logout", icon: <LogoutIcon />, path: "/logout" },
  ];

  // Render flat menus
  const renderMenu = (menu) =>
    menu.map((item) => (
      <ListItem key={item.text} disablePadding>
        <ListItemButton
          onClick={() => navigate(item.path)}
          sx={{
            borderRadius: "12px",
            mx: 1,
            my: 0.5,
            backgroundColor:
              location.pathname === item.path
                ? "rgba(255,255,255,0.3)"
                : "transparent",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
          <ListItemText
            primary={item.text}
            sx={{
              fontWeight: location.pathname === item.path ? "bold" : "normal",
              color: "white",
            }}
          />
        </ListItemButton>
      </ListItem>
    ));

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            background: "linear-gradient(180deg, #1e3c72, #2a5298)",
            color: "white",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* Drawer Header */}
        <DrawerHeader
          sx={{
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            px: 2,
            py: 1.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StorefrontIcon sx={{ fontSize: 26, mr: 1, color: "white" }} />
            <Typography variant="h6" noWrap sx={{ fontWeight: "bold" }}>
              E-Commerce
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        {/* Menus */}
        <List sx={{ mt: 2 }}>
          {/* Dashboard */}
          {renderMenu([
            { text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
          ])}

          {/* Orders Dropdown */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenOrders(!openOrders)}>
              <ListItemIcon sx={{ color: "white" }}>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" sx={{ color: "white" }} />
              {openOrders ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openOrders} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{
                  pl: 4,
                  backgroundColor:
                    location.pathname === "/admin/order-list"
                      ? "rgba(255,255,255,0.3)"
                      : "transparent",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                }}
                onClick={() => navigate("/admin/order-list")}
              >
                <ListItemText
                  primary="Order List"
                  sx={{
                    color: "white",
                    fontWeight:
                      location.pathname === "/admin/orders-list"
                        ? "bold"
                        : "normal",
                  }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  pl: 4,
                  backgroundColor:
                    location.pathname === "/admin/order-details"
                      ? "rgba(255,255,255,0.3)"
                      : "transparent",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                }}
                onClick={() => navigate("/admin/order-details")}
              >
                <ListItemText
                  primary="Order Details"
                  sx={{
                    color: "white",
                    fontWeight:
                      location.pathname === "/admin/order-details"
                        ? "bold"
                        : "normal",
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>

          {/* Products Dropdown */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenProducts(!openProducts)}>
              <ListItemIcon sx={{ color: "white" }}>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Products" sx={{ color: "white" }} />
              {openProducts ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openProducts} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{
                  pl: 4,
                  backgroundColor:
                    location.pathname === "/admin/product-list"
                      ? "rgba(255,255,255,0.3)"
                      : "transparent",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                }}
                onClick={() => navigate("/admin/product-list")}
              >
                <ListItemText
                  primary="Product List"
                  sx={{
                    color: "white",
                    fontWeight:
                      location.pathname === "/admin/product-list"
                        ? "bold"
                        : "normal",
                  }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  pl: 4,
                  backgroundColor:
                    location.pathname === "/admin/products/add"
                      ? "rgba(255,255,255,0.3)"
                      : "transparent",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                }}
                onClick={() => navigate("/admin/products/add")}
              >
                <ListItemText
                  primary="Add Product"
                  sx={{
                    color: "white",
                    fontWeight:
                      location.pathname === "/admin/products/add"
                        ? "bold"
                        : "normal",
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>

          {/* Other menus */}
          {renderMenu(secondaryMenu)}
        </List>

        <Box sx={{ flexGrow: 1 }} />
        <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
        <List>{renderMenu(bottomMenu)}</List>
      </Drawer>

      {/* Main Content */}
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}

const AuthorizedAdminLayout = () => {
  const [role, setRole] = React.useState(null);

  React.useEffect(() => {
    const userData = getFromLocalStorage("user_data");
    setRole(JSON.parse(userData).role);
  }, []);

  if (!role) {
    return <p>redirect to login page</p>;
  } else if (role === "admin") {
    return <AdminLayout />;
  } else {
    return <p>Unauthorized user</p>;
  }
};

export default AuthorizedAdminLayout;
