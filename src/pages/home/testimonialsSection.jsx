import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components
import Button from '../../components/Button';

const TestimonialsSection = () => {

    const [Testimonials, setTestimonials] = useState([
        {
            title: 'Amazing!',
            desc: 'Kreon’s innovative financial solutions have been a lifesaver! Their quick approvals and transparent terms made my borrowing experience stress-free. I could expand my business effortlessly, thanks to their support!',
            author: `Rajesh S., Business Owner`
        },
        {
            title: 'Amazing!',
            desc: 'Kreon’s innovative financial solutions have been a lifesaver! Their quick approvals and transparent terms made my borrowing experience stress-free. I could expand my business effortlessly, thanks to their support!',
            author: `Rajesh S., Business Owner`
        },
        {
            title: 'Amazing!',
            desc: 'Kreon’s innovative financial solutions have been a lifesaver! Their quick approvals and transparent terms made my borrowing experience stress-free. I could expand my business effortlessly, thanks to their support!',
            author: `Rajesh S., Business Owner`
        },
        {
            title: 'Amazing!',
            desc: 'Kreon’s innovative financial solutions have been a lifesaver! Their quick approvals and transparent terms made my borrowing experience stress-free. I could expand my business effortlessly, thanks to their support!',
            author: `Rajesh S., Business Owner`
        },

    ])



    return (
        <div className='testimonial-container-main' style={{ backgroundImage: `url(${Images.testimonial_bg})` }}>
            <div className="testimonial-container-content">
                <div className="testimonial-head">
                    <h1 className="testimonial-title">Voices of Trust</h1>

                </div>

                <div className="testimonial-content-main">
                    <div className="testimonial-content-items">
                        {Testimonials.map((testimonial, index) => (
                            <div
                                key={`testimonial-${index}`}
                                className="testimonial-content-item"
                            >
                                <div className="title">{testimonial.title}</div>
                                <div className="desc">{testimonial.desc}</div>
                                <img className="splitter" src={Images.splitter} />
                                <div className="author">{testimonial.author}</div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default TestimonialsSection;
