import React, {useState, useEffect }  from 'react';
import { Modal} from 'react-bootstrap';
import './popup2.css';


const Popup2 = () =>  {
    const [show, setShow] = useState(true);

    const handleClose = () => {
      setShow(false)
      window.location.assign("/login")
    };
  
    const options = {
        key: 'YOUR__KEY',
        amount: '10000',
        currency: 'INR', 
        name: 'Student',
        description: 'some description',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function(response) {
            alert(response.razorpay_payment_id);
        },
        prefill: {
            name: 'demo',
            contact: '9999999999',
            email: 'demo@demo.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: '#10222E',
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