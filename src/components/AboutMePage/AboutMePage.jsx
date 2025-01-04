import './AboutMePage.css'

function AboutMePage(props) {
    return (
        <div className='about-me-div'>
            <div className="about-me-content-div">
                <h1 id='about-me-large'>About Me</h1>
                <p id="descriptor-p">
                    Hi! My name is Tiberius Colina, and I'm studying 
                    computer science at Georgia Tech. I am a third year 
                    student with a planned graduation date of May 2026. 
                    At Georgia Tech, my two concentrations are in 
                    Information Systems and Artificial Intelligence.
                </p>

                <p id="descriptor-p">
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

        </div>
    )
}

export default AboutMePage;