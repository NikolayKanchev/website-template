import React from 'react';
import Card from './Card';
import './Card.css';


const CardsList = () => {

    const cards = [
        { 
            id: "1",
            title: "FREE",
            price: "$0",
            btnText: "Free SignUp",
            period: "per month",
            text: "Collect & respond to Trustpilot reviews for free.",
            bestValue: false
        },
        { 
            id: "2",
            title: "Lite",
            price: "$300",
            btnText: "Free Demo",
            period: "per month",
            text: "Showcase reviews on your website & clearly demonstrate marketing ROI.",
            bestValue: false
        },
        { 
            id: "3",
            title: "Pro",
            price: "$550",
            btnText: "Free Demo",
            period: "per month",
            text: "Give your marketing & sales a significant boost with a wide range of customizable tools.",
            bestValue: true
        },
        { 
            id: "4",
            title: "Enterprise",
            price: "Custom",
            btnText: "Get a quote",
            period: "per month",
            text: "Full access to Trustpilot Business with superior integrations, data protection & account management.",
            bestValue: false
        },
    ]

    return (
        <>
            {cards.map( card => <Card key={card.id} card={card} /> )}
            
            { cards.length > 0 ? (
                <>
                    <div className="hidden">
                        <Card card={cards[0]}/>
                    </div>
                    <div className="hidden">
                        <Card card={cards[0]}/>
                    </div>
                </>
            ): null }
        </>
    )
}

export default CardsList;