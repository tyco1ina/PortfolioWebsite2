import './HomePage.css'

function HomePage(props) {
    return (
        <>
        <div className='home-page'>
            <div className="profile-div" id='profile-div-left'>
                <h1 id='name-h1'>Tiberius Colina</h1>
                <p id="descriptor-p">Computer Science @ Georgia Tech</p>
                <a href="https://www.linkedin.com/in/tcolina/" target="_blank">My LinkedIn&gt; </a>

            </div>

        </div>

    <div className="about-me-content-div">
        <p className="about-p">
            Hi! My name is Tiberius Colina, and I'm studying 
            computer science at Georgia Tech. I am a third year 
            student with a planned graduation date of May 2026. 
            At Georgia Tech, my two concentrations are in 
            Information Systems and Artificial Intelligence.
        </p>

        <p className="about-p">
            As an aspiring Cloud/DevOps engineer, I've focused
            on learning and applying technologies used to create
            scalable software systems. In July of 2023, I
            recieved the AWS Certified Cloud Practitioner 
            certification, which served as a comprehensive
            high-level introduction to cloud. Since then, I've
            applied these skills, particularly in serverless 
            technologies, in multiple internships and projects.

        </p>

    </div>
    </>
    )
}

export default HomePage;