import React, { useState, useEffect, useContext, createContext } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [postsData, setPostsData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Mock data for frontend-only development
        setPostsData({
            'Education': [{ id: 1, title: 'Improving Access to Quality Education in Rural Zambia', content: "As we strive to enhance education across Zambia, it's crucial to address the disparity between urban and rural areas. Many children in rural communities still lack access to quality education due to inadequate infrastructure and resources. Investing in better facilities and teacher training in these areas could make a significant difference in their future prospects.", date: '2024-01-01', likes: 10 }],
            'Health': [{ id: 1, title: "Addressing the Shortage of Medical Supplies in Health Facilities", content: "Health facilities across Zambia often struggle with shortages of essential medical supplies, impacting the quality of care provided. Improving the supply chain and ensuring timely delivery of medical resources can enhance healthcare services and improve patient outcomes.", date: '2024-01-01', likes: 20 }],
            'Transport': [{ id: 1, title: "Upgrading Zambia's Rural Road Networks", content: "Many rural areas in Zambia are still inaccessible due to poor road conditions. Upgrading these transport networks will not only improve access to markets and healthcare but also boost economic activities in these regions by connecting them with larger economic centers.", date: '2024-08-08', likes: 15 }],
            'Energy': [{ id: 1, title: "The Impact of Energy Shortages on Small Businesses", content: "Frequent power outages are a significant challenge for small businesses in Zambia. These interruptions not only affect daily operations but also lead to increased operational costs. Ensuring a more reliable and consistent energy supply would greatly benefit local entrepreneurs and stimulate economic growth." }],
            'Human Rights': [{ id: 1, title: "Strengthening Human Rights Protections", content: "Despite progress, there are ongoing human rights concerns in Zambia, including issues related to freedom of expression and assembly. Strengthening legal frameworks and enforcement mechanisms to protect these rights is essential for fostering a more just and inclusive society.", date: '2024-08-08', likes: 15 }],
            'Tourism': [{ id: 1, title: "Promoting Sustainable Tourism", content: "Zambia's natural beauty and wildlife offer immense tourism potential. However, it's important to promote sustainable tourism practices that protect our environment and local communities while boosting the economy. Developing eco-friendly tourism initiatives can help balance economic growth with environmental conservation.", date: '2024-08-08', likes: 15 }],
            'Digital Rights': [{ id: 1, title: "Ensuring Safe and Inclusive Digital Spaces for All Zambians", content: "With the rise of digital technology, protecting digital rights has become increasingly important. Ensuring that all Zambians have access to safe and inclusive online platforms is crucial for fostering digital literacy and preventing online abuse.", date: '2024-08-08', likes: 15 }],
            'Agriculture': [{ id: 1, title: "Enhancing Agricultural Productivity through Modern Techniques", content: "Agriculture remains a cornerstone of Zambia's economy. Adopting modern farming techniques and technologies can significantly improve productivity and food security. Government and private sector support for agricultural innovation is key to achieving these goals.", date: '2024-08-08', likes: 15 }],
            'Economy': [{ id: 1, title: "Building Resilience in Zambia's Economy Amid Global Uncertainties", content: "Zambia's economy faces various challenges, including fluctuating commodity prices and external debt pressures. Strengthening economic resilience through diversified industries and prudent fiscal policies can help stabilize the economy and promote sustainable growth.", date: '2024-08-08', likes: 15 }],
            'Domestic Violence': [{ id: 1, title: "Combating Domestic Violence: A Call for More Support Services", content: "Domestic violence remains a pressing issue in Zambia. Increasing awareness and providing more support services for survivors are critical steps towards addressing this issue. Community-based initiatives and stronger legal protections can help create a safer environment for all.", date: '2024-08-08', likes: 15 }],
            'Online Abuse & Grooming': [{ id: 1, title: "Protecting Our Children from Online Abuse and Grooming", content: "Online abuse and grooming are growing concerns for families in Zambia. Implementing robust digital safety education programs and stricter regulations for online platforms can help safeguard our children from these threats.", date: '2024-08-08', likes: 15 }],
            'Child Abuse': [{ id: 1, title: "Strengthening Measures to Prevent and Address Child Abuse", content: "Child abuse is a serious concern that needs urgent attention. Strengthening child protection laws and enhancing community awareness can help in preventing abuse and providing better support for affected children.", date: '2024-08-08', likes: 15 }],
            'Child Defilement': [{ id: 1, title: "Tackling the Issue of Child Defilement with Urgency", content: "Child defilement continues to be a grave issue in Zambia. Ensuring that legal systems are robust and that there are adequate support structures for victims can help in addressing this problem and protecting our children.", date: '2024-08-08', likes: 15 }],
            'Early & Childhood Marriages': [{ id: 1, title: "Ending Early Childhood Marriages: A Path to Empowerment", content: "Early and child marriages undermine the future of many young girls in Zambia. Implementing educational programs and enforcing existing laws can help prevent these marriages and empower girls to achieve their full potential.", date: '2024-08-08', likes: 15 }],
            'Access to Information': [{ id: 1, title: "Improving Access to Information for Greater Transparency", content: "Access to information is crucial for an informed and engaged citizenry. Enhancing transparency and access to public information can strengthen democratic processes and help citizens make informed decisions.", date: '2024-08-08', likes: 15 }],
            'Data Protection': [{ id: 1, title: "Ensuring Robust Data Protection in the Digital Age", content: "With the increase in digital data collection, ensuring robust data protection measures is vital. Implementing strong data protection policies and educating the public on privacy rights can help safeguard personal information from misuse and breaches.", date: '2024-08-08', likes: 15 }],
        });
        setIsLoading(false);
    }, []);

    return (
        <PostContext.Provider value={{ postsData, setPostsData, isLoading }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePosts = () => useContext(PostContext);
