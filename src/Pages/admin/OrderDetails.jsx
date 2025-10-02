import {Box,Typography,Paper,Grid,Table,TableHead,TableRow,TableCell,TableBody,Divider,} from "@mui/material";
const order = {
    products: [
        { name: "Shirt", price: 16, qty: 3 },
        { name: "Top", price: 57, qty: 1 },
        { name: "T-Shirt", price: 10, qty: 2 },
        { name:  "Western Top", price: 55, qty: 2 },
    ],
};
export default function OrderDetails() {
    const subtotal = order.products.reduce(
        (acc, p) => acc + p.price * p.qty,
        0
    );
    const discount = 2;
    const total = subtotal - discount;
return (
<Box p={3}>
    <Grid container spacing={3} sx={{display:"flex", justifyContent:'center'}}>
    <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2 }}>
        <Typography variant="h6" mb={2}>
            Order details
        </Typography>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>Products</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Total</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {order.products.map((p, index) => (
                <TableRow key={index}>
                <TableCell>
                    <Typography>{p.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                    {p.details}
                    </Typography>
                </TableCell>
                <TableCell>${p.price}</TableCell>
                <TableCell>{p.qty}</TableCell>
                <TableCell>${p.price * p.qty}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="flex-end" flexDirection="column">
            <Typography>Subtotal: ${subtotal}</Typography>
            <Typography>Discount: ${discount}</Typography>
            <Typography fontWeight="bold">Total: ${total}</Typography>
        </Box>
        </Paper>
    </Grid>
    </Grid>
</Box>
);
}



