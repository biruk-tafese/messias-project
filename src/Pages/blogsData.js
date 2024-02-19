import getPost from '../lib/getPostes';


const fetchPostData = async () => {
    const posts = await getPost();
    console.log(posts); // This will log the fetched posts
};

fetchPostData();

const blogs = {
    blogList: [
        {
            id: 1,
            title: "WHO CRUCIFIED Y'SHUA HAMASHIACH?",
            image: require('../Images/OurBlos.jpg'),
            description: `
            When YHVH created Adam, He created him in His own image, placing him in paradise 
            to enjoy the fruits of the earth and give glory to his Creator. However, Adam sinned and 
            was removed from paradises, which lead to a life of hardship.
            Even though man was sinful and disobedient to Him, YHVH was merciful to his 
            creatures. Abraham was a righteous man who pleased YHVH and thus inherited 
            blessings. 
            “I am God Almighty. Walk before me, and be blameless. I will make my covenant 
            between me and you, and will multiply you exceedingly.” Genesis 17:1-2
            Though Abraham received this promise, his descendants suffered slavery in Egypt for 
            430 years. When Egyptians became harsh with the Israelites, the people cried-out to 
            their Elohim and He sent Moses to lead them out of Egypt. When YHVH delivered his 
            people from the bondage of slavery, He gave them instructions (commandments) to 
            observe when entering the Promised Land. The people of Israel were not able to fulfill 
            the commandments. Therefore, because of His great love for human beings, He sent 
            His Son to this world to reconcile men with Him.
            `,
            dateUpdated: "Jan 7, 2023",
            author: "Daniel Belay Mekonnen"
        },
        {
            id: 2,
            title: "WHO CRUCIFIED Y'SHUA HAMASHIACH?",
            image: require("../Images/OurBlos.jpg"),
            description: `
            When YHVH created Adam, He created him in His own image, placing him in paradise 
            to enjoy the fruits of the earth and give glory to his Creator. However, Adam sinned and 
            was removed from paradises, which lead to a life of hardship.
            Even though man was sinful and disobedient to Him, YHVH was merciful to his 
            creatures. Abraham was a righteous man who pleased YHVH and thus inherited 
            blessings. 
            “I am God Almighty. Walk before me, and be blameless. I will make my covenant 
            between me and you, and will multiply you exceedingly.” Genesis 17:1-2
            Though Abraham received this promise, his descendants suffered slavery in Egypt for 
            430 years. When Egyptians became harsh with the Israelites, the people cried-out to 
            their Elohim and He sent Moses to lead them out of Egypt. When YHVH delivered his 
            people from the bondage of slavery, He gave them instructions (commandments) to 
            observe when entering the Promised Land. The people of Israel were not able to fulfill 
            the commandments. Therefore, because of His great love for human beings, He sent 
            His Son to this world to reconcile men with Him.
            `,
            dateUpdated: "Feb 15, 2023",
            author: "Daniel Belay Mekonnen"
        },
         {
                    id: 3,
                    title: "WHO CRUCIFIED Y'SHUA HAMASHIACH?",
                    image: require('../Images/OurBlos.jpg'),
                    description: `
                    When YHVH created Adam, He created him in His own image, placing him in paradise 
                    to enjoy the fruits of the earth and give glory to his Creator. However, Adam sinned and 
                    was removed from paradises, which lead to a life of hardship.
                    Even though man was sinful and disobedient to Him, YHVH was merciful to his 
                    creatures. Abraham was a righteous man who pleased YHVH and thus inherited 
                    blessings. 
                    “I am God Almighty. Walk before me, and be blameless. I will make my covenant 
                    between me and you, and will multiply you exceedingly.” Genesis 17:1-2
                    Though Abraham received this promise, his descendants suffered slavery in Egypt for 
                    430 years. When Egyptians became harsh with the Israelites, the people cried-out to 
                    their Elohim and He sent Moses to lead them out of Egypt. When YHVH delivered his 
                    people from the bondage of slavery, He gave them instructions (commandments) to 
                    observe when entering the Promised Land. The people of Israel were not able to fulfill 
                    the commandments. Therefore, because of His great love for human beings, He sent 
                    His Son to this world to reconcile men with Him.
                    `,
                    dateUpdated: "Jan 7, 2023",
                    author: "Biruk Tafese"
                },
                {
                    id: 4,
                    title: "WHO CRUCIFIED Y'SHUA HAMASHIACH?",
                    image: require("../Images/OurBlos.jpg"),
                    description: `
                    When YHVH created Adam, He created him in His own image, placing him in paradise 
                    to enjoy the fruits of the earth and give glory to his Creator. However, Adam sinned and 
                    was removed from paradises, which lead to a life of hardship.
                    Even though man was sinful and disobedient to Him, YHVH was merciful to his 
                    creatures. Abraham was a righteous man who pleased YHVH and thus inherited 
                    blessings. 
                    “I am God Almighty. Walk before me, and be blameless. I will make my covenant 
                    between me and you, and will multiply you exceedingly.” Genesis 17:1-2
                    Though Abraham received this promise, his descendants suffered slavery in Egypt for 
                    430 years. When Egyptians became harsh with the Israelites, the people cried-out to 
                    their Elohim and He sent Moses to lead them out of Egypt. When YHVH delivered his 
                    people from the bondage of slavery, He gave them instructions (commandments) to 
                    observe when entering the Promised Land. The people of Israel were not able to fulfill 
                    the commandments. Therefore, because of His great love for human beings, He sent 
                    His Son to this world to reconcile men with Him.
                    `,
                    dateUpdated: "Feb 15, 2023",
                    author: "Daniel Belay Mekonnen"
                },
                // Add more blog objects as needed
                
    ]
};

export default blogs;
