

const PaymentManagementRow = () => {
    return (
        <>
            {/* row 1 */}
          <tr className="bg-base-200">
          <td>payment.orderId</td>
              <td>payment.userId</td>
              <td>payment.amount</td>
              <td>payment.status</td>
              <td>
                {/* {payment.status === 'pending' && (
                  <button onClick={() => handleAcceptPayment(payment)}>
                    Accept Payment
                  </button>
                )} */}

                <button>Accept Payment</button>
              </td>
          </tr>
        </>
    );
};

export default PaymentManagementRow;