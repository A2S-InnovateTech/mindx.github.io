import React, {useState, useEffect }  from 'react';
import { Modal} from 'react-bootstrap';
import './popup2.css';
import axios from "axios";

const Popup2 = () =>  {
    const [show, setShow] = useState(true);

    const handleClose = () => {
      setShow(false)
      window.location.assign("/login")
    };
  

    // function loadScript(src) {
    //     return new Promise((resolve) => {
    //         const script = document.createElement("script");
    //         script.src = src;
    //         script.onload = () => {
    //             resolve(true);
    //         };
    //         script.onerror = () => {
    //             resolve(false);
    //         };
    //         document.body.appendChild(script);
    //     });
    // }

    // async function displayRazorpay() {
    //     const res = await loadScript(
    //         "https://checkout.razorpay.com/v1/checkout.js"
    //     );

    //     if (!res) {
    //         alert("Razorpay SDK failed to load. Are you online?");
    //         return;
    //     }

    //     const result = await axios.post("http://localhost:3000/payment/orders");

    //     if (!result) {
    //         alert("Server error. Are you online?");
    //         return;
    //     }

    //     const { amount, id: order_id, currency } = result.data;
        
    //     const options = {
    //         key: "rzp_test_r6FiJfddJh76SI", // Enter the Key ID generated from the Dashboard
    //         amount: amount.toString(),
    //         currency: currency,
    //         name: "Soumya Corp.",
    //         description: "Test Transaction",
    //         image: { logo },
    //         order_id: order_id,
    //         handler: async function (response) {
    //             const data = {
    //                 orderCreationId: order_id,
    //                 razorpayPaymentId: response.razorpay_payment_id,
    //                 razorpayOrderId: response.razorpay_order_id,
    //                 razorpaySignature: response.razorpay_signature,
    //             };

    //             const result = await axios.post("http://localhost:3000/payment/success", data);

    //             alert(result.data.msg);
    //         },
    //          prefill: {
    //             name: "Soumya Dey",
    //             email: "SoumyaDey@example.com",
    //              contact: "9999999999",
    //          },
    //          notes: {
    //              address: "Soumya Dey Corporate Office",
    //          },
    //          theme: {
    //              color: "#61dafb",
    //          },
    //     };

    //     const paymentObject = new window.Razorpay(options);
    //     paymentObject.open();
    // }


    
    const options = {
        key: 'YOUR_KEY',
        amount: '100', 
        name: 'Acme shop',
        description: 'some description',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function(response) {
            alert(response.razorpay_payment_id);
        },
        prefill: {
            name: 'Gaurav',
            contact: '9999999999',
            email: 'demo@demo.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

  
    return (
      <>
        <Modal
          size="lg"
          style={{fontSize:"15px"}}
          dialogClassName="subscribe_pop"
          aria-labelledby="example-custom-modal-styling-title" 
          show={show} 
          onHide={handleClose}>

          
          <Modal.Header closeButton className="subscribe_popback_header">
            <Modal.Title className="subscribe_title">
              <p>Subscribe&nbsp;Now&nbsp;!!</p>
              <button >Pay with Razorpay</button>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="subscribe_popback">
            <p  className="subscribe_p">
             To enjoy our services hassle free you have to subscribe it now :
            </p>
            {/* onClick={displayRazorpay} */}
            <div className="subscribe_btn" onClick={openPayModal}>
              <p className="button-text">Subscribe</p>
            </div>
            <p className="subscribe_p">
              Already subscribed to our services ? 
              <br/>
              Enter your subscription key received from school and start using the services.
            </p>
            <div className="key_input">
              <input className="input-text" type="text" placeholder="Enter your key here"/>
            </div>
            <div className="verify_btn">
              <p className="button-text">Verify</p>
            </div>

          </Modal.Body>
          
        </Modal>
      </>
    );
  }
  
  export default Popup2;