import Card from './component/Card'

const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTWlnJCnn2ljYqv2t4XY9bM5U4pnohvXZRw&s",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small_2x/amazon-logo-amazon-icon-transparent-free-png.png",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Cloud Support Associate",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-icon.png",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJIOGtHi6yLhWs9gI0Bz1T83KoUzuqCQ7IQ&s",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Software Engineer Intern",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$25/hr",
    location: "Gurgaon, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    companyName: "Tesla",
    datePosted: "8 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png",
    companyName: "LinkedIn",
    datePosted: "12 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Kolkata, India",
  },
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){

        return <div key={idx}> 
        <Card companyName={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} datePosted={elem.datePosted} brandLogo={elem.brandLogo} />
        </div>
      })}
    </div>
  )
}

export default App
