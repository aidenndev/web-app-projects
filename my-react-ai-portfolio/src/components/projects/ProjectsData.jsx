import projectOne from "../../assets/project-1.png"
import projectTwo from "../../assets/project-2.png"
import projectThree from "../../assets/project-3.png"
import projectFour from "../../assets/project-4.png"
import projectFive from "../../assets/project-5.png"

const projects = {
    1: {
        title: "ReactJS Personal Website",
        image: projectOne,
        description: (
            <>
                <p>This website was created at the request of a customer to introduce himself and his work as a tour guide to loyal and potential customers.</p>
                <p>- Create and use custom React Hooks, React Portals and React Icons</p>
                <p>- Design Modern and Responsive Webapp with CSS3 (CSS Media Queries for website Responsiveness)</p>
                <p>- Create slides with SwiperJS</p>
                <p>- Apply multiple Contact Options (email, messenger, whatsapp, viber) wih EmailJS</p>
            </>
        ),
        github: "https://github.com/aidenndev/web-app-projects/tree/main",
        demo: "http://jayden17.com"
    },

    2: {
        title: "ReactJS Aiden Restaurant",
        image: projectTwo,
        description: (
            <>
                <p>I created this website as a practice to improve my layout design skills of a react website in a more professional manner.</p>
                <p>- Create and used React functional components and their reusability</p>
                <p>- Design with #CSS properties to master flex & grid</p>
                <p>- Place media queries for satisfactory responsiveness covering almost all devices</p>
                <p>- Add a gallery and intro background video</p>
            </>
        ),
        github: "https://github.com/aidenndev/web-app-projects/tree/main",
        demo: "https://aidenndev.github.io/aiden-restaurant/"
    },

    3: {
        title: "ASP.NET Bookstore Online Web Application",
        image: projectThree,
        description: (
            <>
                <p>This website was created by using ASP.NET MVC (C#)</p>
                <p>- Apply SQL server configuration with Entity framework, build RESTFUL services, use CRUD, intergrate PAYPAL, and deploy to Azure</p>
                <p>- Allow customer to search a book in the bookstore</p>
                <p>- Allow customer to reserve a book in the store (auto-generated booking number)</p>
            </>
        ),
        github: "https://github.com/aidenndev/Bookstore",
        demo: "https://github.com/aidenndev/Bookstore"
    },

    4: {
        title: "Project 4",
        image: projectFour,
        description: (
            <>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto, quia laudantium porro repellendus voluptas vitae dolorum dignissimos culpa architecto laboriosam, aperiam rerum nesciunt alias perspiciatis totam, omnis ducimus doloremque.
                </p>
            </>
        ),
        github: "http://github.com",
        demo: "http://github.com"
    },

    5: {
        title: "Project 5",
        image: projectFive,
        description: (
            <>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto, quia laudantium porro repellendus voluptas vitae dolorum dignissimos culpa architecto laboriosam, aperiam rerum nesciunt alias perspiciatis totam, omnis ducimus doloremque.
                </p>
            </>
        ),
        github: "http://github.com",
        demo: "http://github.com"
    }
}

export default projects