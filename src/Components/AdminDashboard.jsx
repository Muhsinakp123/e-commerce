import React from 'react'

import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Donut from './Donut'
import Chart from './Chart'

const AdminDashboard = () => {
  return (
       <Grid
          container
          spacing={3}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {/* Orders */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                minWidth: 280,
                minHeight: 180,
                background: "linear-gradient(135deg, #1e88e5, #42a5f5)",
                color: "white",
                borderRadius: 3,
                boxShadow: 4,
                "&:hover": { boxShadow: 8, transform: "translateY(-5px)" },
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h6">Orders</Typography>
                  <ShoppingCartIcon fontSize="large" />
                </Box>
                <Typography variant="h4" sx={{ mt: 2 }}>
                  1,245
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ color: "white" }} size="small">
                  View Orders
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Products */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                minWidth: 280,
                minHeight: 180,
                background: "linear-gradient(135deg, #8e24aa, #ba68c8)",
                color: "white",
                borderRadius: 3,
                boxShadow: 4,
                "&:hover": { boxShadow: 8, transform: "translateY(-5px)" },
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h6">Products</Typography>
                  <InventoryIcon fontSize="large" />
                </Box>
                <Typography variant="h4" sx={{ mt: 2 }}>
                  356
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ color: "white" }} size="small">
                  Manage Products
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Shipping */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                minWidth: 280,
                minHeight: 180,
                background: "linear-gradient(135deg, #2e7d32, #66bb6a)",
                color: "white",
                borderRadius: 3,
                boxShadow: 4,
                "&:hover": { boxShadow: 8, transform: "translateY(-5px)" },
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h6">Shipping</Typography>
                  <LocalShippingIcon fontSize="large" />
                </Box>
                <Typography variant="h4" sx={{ mt: 2 }}>
                  152
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ color: "white" }} size="small">
                  Manage Shipping
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Payment */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                minWidth: 280,
                minHeight: 180,
                background: "linear-gradient(135deg, #e51e8f, #f681ea)",
                color: "white",
                borderRadius: 3,
                boxShadow: 4,
                "&:hover": { boxShadow: 8, transform: "translateY(-5px)" },
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h6">Payment</Typography>
                  <PaymentIcon fontSize="large" />
                </Box>
                <Typography variant="h4" sx={{ mt: 2 }}>
                  1,245
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ color: "white" }} size="small">
                  Manage Payment
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid >
             <Chart />
          </Grid>
          <Grid sx={{mt:3}}>
             <Donut />
          </Grid>
        </Grid>
  )
}

export default AdminDashboard