import { Card, CardContent, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";

const OrderCard = observer(({ orderInfo }) => {
  console.log(orderInfo);
  return (
    <Card>
      <CardContent>
        <Typography textAlign={"center"}>
          {" "}
          {orderInfo.itemShortName} x {orderInfo.howManyItem}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default OrderCard;
