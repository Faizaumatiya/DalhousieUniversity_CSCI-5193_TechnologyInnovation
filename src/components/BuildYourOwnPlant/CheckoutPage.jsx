import React, { Component } from "react";
import { Grid, Box, TextField, Button, Typography, Alert } from "@mui/material";
import ReviewOrderCardStack from "./ReviewOrderCardStack";
import {
  COLORS,
  FREE_PURCHASE_COUPON,
  HTML_TAGS,
  PAYMENT_STATUS,
  TEXT_ALIGN,
  TEXT_FIELD_TYPE,
} from "../../constants";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import Heading from "./Heading";
import { color, Stack } from "@mui/system";

const CloseButton = ({ onClickHandler }) => {
  return (
    <>
      <IconButton
        aria-label="close"
        color="success"
        sx={{ float: "right" }}
        onClick={() => {
          onClickHandler();
        }}
      >
        <CloseIcon />
      </IconButton>
    </>
  );
};

const FormButton = ({ label, onClickHandler }) => {
  return (
    <>
      <Button
        size="small"
        variant="contained"
        onClick={() => {
          onClickHandler();
        }}
        color="success"
        sx={{ background: COLORS.BRIGHT_GREEN, float: "right" }}
      >
        {label}
      </Button>
    </>
  );
};

const FullWidthTextField = ({
  label = "",
  value = "",
  type = TEXT_FIELD_TYPE.TEXT,
  onChangeHandler,
  limit = 999,
}) => {
  return (
    <>
      <TextField
        fullWidth
        label={label}
        value={value}
        color={"success"}
        type={type}
        onChange={(event) => {
          onChangeHandler(event.target.value);
        }}
        id="fullWidth"
        sx={{ marginY: 1.5 }}
        inputProps={{ maxLength: limit }}
      />
    </>
  );
};

const DefaultTextField = ({
  label = "",
  value = "",
  type = TEXT_FIELD_TYPE.TEXT,
  placeholder = "",
  onChangeHandler,
}) => {
  return (
    <>
      <TextField
        id="outlined-controlled"
        label={label}
        value={value}
        placeholder={placeholder}
        type={type}
        color={"success"}
        onChange={(event) => {
          onChangeHandler(event.target.value);
        }}
        sx={{ marginY: 1.5 }}
      />
    </>
  );
};

const AddressForm = () => {
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = React.useState("Halifax");
  const [postalCode, setPostalCode] = React.useState("B3J2F9");

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 400,
          maxWidth: "100%",
        }}
      >
        <FullWidthTextField
          label="Address Line 1"
          value={addressOne}
          onChangeHandler={setAddressOne}
        />
        <FullWidthTextField
          label="Address Line 2"
          value={addressTwo}
          onChangeHandler={setAddressTwo}
        />
        <Box component="form" noValidate autoComplete="off">
          <DefaultTextField
            label="City"
            value={city}
            onChangeHandler={setCity}
          />
          <TextField
            id="outlined-controlled"
            label="Postal Code"
            value={postalCode}
            onChange={(event) => {
              setPostalCode(event.target.value);
            }}
            sx={{ float: "right", marginY: 1.5 }}
          />
        </Box>
      </Box>
    </>
  );
};

const PaymentForm = ({
  freePurchaseActivateHandler,
  paymentStatusHandler,
  couponCodeState,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardOwner, setCardOwner] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [couponCode, setCouponCode] = useState("");

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 400,
          maxWidth: "100%",
        }}
      >
        <FullWidthTextField
          label="Card number"
          value={cardNumber}
          limit={16}
          onChangeHandler={setCardNumber}
        />
        <FullWidthTextField
          label="Card owner"
          value={cardOwner}
          onChangeHandler={setCardOwner}
        />
        <Box component="form" noValidate autoComplete="off">
          <DefaultTextField
            label=""
            value={expiryDate}
            type={TEXT_FIELD_TYPE.DATE}
            placeholder={""}
            onChangeHandler={setExpiryDate}
          />

          <TextField
            id="outlined-controlled"
            label="CVV"
            type={"password"}
            color={"success"}
            value={cvv}
            onChange={(event) => {
              setCVV(event.target.value);
            }}
            sx={{ float: "right", marginY: 1.5 }}
            inputProps={{ maxLength: 3 }}
          />
        </Box>
        <Stack spacing={1}>
          <TextField
            id="outlined"
            label="Coupon Code"
            value={couponCode}
            color={"success"}
            onChange={(event) => {
              setCouponCode(event.target.value);
              couponCodeState(event.target.value);
              if (couponCode === FREE_PURCHASE_COUPON) {
                freePurchaseActivateHandler(true);
                paymentStatusHandler(PAYMENT_STATUS.SUCCESS);
              }
            }}
            sx={{
              float: "left",
              marginTop: 5,
              input: { color: COLORS.PRIMARY, fontWeight: 800 },
            }}
            placeholder={FREE_PURCHASE_COUPON}
          />
          <Alert severity="info" color="success">
            Use coupon {FREE_PURCHASE_COUPON} for FREE kit
          </Alert>
        </Stack>
      </Box>
    </>
  );
};
const AcknowledgementForm = ({ paymentStatus }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 400,
          maxWidth: "100%",
        }}
      >
        <div style={{ textAlign: "center", margin: 50 }}>
          <image>
            {paymentStatus === PAYMENT_STATUS.SUCCESS ? (
              <CheckCircleIcon
                fontSize="large"
                color="success"
                sx={{
                  width: 150,
                  height: 150,
                  padding: 3,
                  background: `${COLORS.LIGHT_GREEN}30`,
                  borderRadius: 50,
                }}
              />
            ) : (
              <WarningIcon
                fontSize="large"
                color="error"
                sx={{
                  width: 150,
                  height: 150,
                  padding: 3,
                  background: `${COLORS.RED}30`,
                  borderRadius: 50,
                }}
              />
            )}
          </image>
          <div style={{ height: 30 }} />
          <Heading
            variant={HTML_TAGS.H4}
            text={
              paymentStatus === PAYMENT_STATUS.SUCCESS
                ? "Payment Successful"
                : "Payment Failed"
            }
            align={TEXT_ALIGN.CENTER}
            color={COLORS.PRIMARY}
          />
        </div>
      </Box>
    </>
  );
};

const CheckoutPage = ({
  plant,
  handleConfirmOrder,
  handleRejectOrder,
  handleCloseBtnAction,
}) => {
  const [paymentFormIndex, setPaymentFormIndex] = useState(0);
  const [freePurchase, setFreePurchase] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(PAYMENT_STATUS.RETRY);
  const [couponCode, setCouponCode] = useState("");

  const incrementPageIndex = () => {
    if (paymentFormIndex <= 1) {
      setPaymentFormIndex(paymentFormIndex + 1);
    } else {
      setPaymentFormIndex(0);
    }
  };

  const decrementPageIndex = () => {
    if (paymentFormIndex > 0) {
      setPaymentFormIndex(paymentFormIndex - 1);
    }
  };

  const nextBtnActionHandler = () => {
    incrementPageIndex();
  };

  const payBtnActionHandler = () => {
    if (couponCode === FREE_PURCHASE_COUPON) {
      setFreePurchase(true);
      setPaymentStatus(PAYMENT_STATUS.SUCCESS);
    }
    incrementPageIndex();
  };

  const doneBtnActionHandler = () => {
    if (
      paymentStatus === PAYMENT_STATUS.RETRY ||
      paymentStatus === PAYMENT_STATUS.FAIL
    ) {
      setPaymentFormIndex(0);
    } else {
      handleConfirmOrder();
    }
  };

  return (
    <>
      <Grid
        container
        spacing={5}
        sx={{
          background: COLORS.WHITE,
          paddingX: 10,
          paddingY: 5,
          width: 1200,
          margin: 20,
          borderRadius: 4,
        }}
      >
        <Grid xs={12} md={12}>
          <CloseButton onClickHandler={handleCloseBtnAction} />
        </Grid>
        <Grid xs={2} md={2}>
          <ReviewOrderCardStack plant={plant} />
        </Grid>
        <Grid xs={10} md={10}>
          <Grid
            container
            spacing={5}
            sx={{
              paddingX: 20,
              marginX: 1,
              marginY: 0,
            }}
          >
            {paymentFormIndex === 0 ? (
              <AddressForm sx={{ margin: 20, paddingX: 10, paddingY: 5 }} />
            ) : (
              <></>
            )}

            {paymentFormIndex === 1 ? (
              <PaymentForm
                sx={{ margin: 20, paddingX: 10, paddingY: 5 }}
                freePurchaseActivateHandler={setFreePurchase}
                paymentStatusHandler={setPaymentStatus}
                couponCodeState={setCouponCode}
              />
            ) : (
              <></>
            )}

            {paymentFormIndex === 2 ? (
              <AcknowledgementForm
                paymentStatus={paymentStatus}
                sx={{ margin: 20, paddingX: 10, paddingY: 5 }}
              />
            ) : (
              <></>
            )}
          </Grid>
          {paymentFormIndex === 0 ? (
            <FormButton label={"Next"} onClickHandler={nextBtnActionHandler} />
          ) : (
            <></>
          )}
          {paymentFormIndex === 1 ? (
            <FormButton label={"Pay"} onClickHandler={payBtnActionHandler} />
          ) : (
            <></>
          )}
          {paymentFormIndex === 2 ? (
            <FormButton
              label={
                paymentStatus === PAYMENT_STATUS.SUCCESS ? "Done" : "Retry"
              }
              onClickHandler={doneBtnActionHandler}
            />
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default CheckoutPage;
