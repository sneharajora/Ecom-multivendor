import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalButton = ({amount,onSuccess,onError}) => {
  return (
    <PayPalScriptProvider
      option={{
        "client-id":
          "AYhZmZydviftiD32Lu3ELEj9ud2C5WKT9B8WlRal_V55GqRe3TVYFYEyc_kRTkM2e8oCtXmS8zSTAIIF",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
