import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";


const About = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className='text-secondary text-center text-3xl font-semibold uppercase my-10'>About US</h1>
      <div className="max-w-screen-2xl mx-auto">
      
        {/* table list */}
        <div className="">
          {/* First grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  md:gap-20 gap-5  py-10">
            <div>
              <img src={"https://marketingtochina.com/wp-content/uploads/2018/05/Tourism-Group.jpg"} alt="" className="w-full h-96" />
            </div>
            <div className="lg:py-10 px-2">
              <h1 className="text-4xl mb-10 text-secondary">We’re Tour In Australia</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, inventore minus in eligendi optio saepe impedit
                magnam consectetur cum veniam nobis, distinctio repellendus
                quaerat consequatur vitae harum commodi sunt facilis cupiditate
                sequi vero quidem dignissimos? Minus eveniet velit, assumenda
                reiciendis explicabo corporis? Sit iure eveniet omnis numquam
                ad, placeat mollitia!
              </p>
            </div>
          </div>
          {/* Second Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  md:gap-20 gap-5  py-10">
            <div className=" order-1 md:order-2">
              <img src={"https://www.egypttoursportal.com/images/2022/03/12-Days-Best-of-Egypt-Group-Tour-Package-Egypt-Tours-Portal.jpg"} alt="" className="w-full h-96" />
            </div>
            <div className="lg:py-10 order-2 md:order-1 px-2">
              <h1 className="text-4xl mb-10 text-secondary">We’re Tour In America</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                harum, magni molestiae, eius odit distinctio asperiores
                laboriosam reiciendis eaque, adipisci ea hic quia? Ipsam
                voluptatibus quaerat modi minus esse eaque dolores maiores
                assumenda dolorem aut vero mollitia, exercitationem velit. Nihil
                impedit ullam molestias quis quas voluptas aperiam ab doloremque
                necessitatibus!
              </p>
            </div>
          </div>
          {/* 3rd grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  md:gap-20 gap-5  py-10">
            <div>
              <img src={"https://i.pinimg.com/originals/07/6b/3e/076b3e46912d513ccb1392bf8b41f259.jpg"} alt="" className="w-full h-96" />
            </div>
            <div className="lg:py-10 px-2">
              <h1 className="text-4xl mb-10 text-secondary">
                We support independent designers
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                voluptatum repellendus alias accusantium distinctio vel fuga
                ipsam eligendi nisi aperiam voluptate nemo placeat repellat
                debitis voluptatem, architecto ab dolorem quas cupiditate
                reiciendis. Unde commodi aliquam assumenda. Saepe repudiandae
                dolorem ad soluta voluptas? Expedita voluptates culpa rerum
                natus veniam neque laborum?
              </p>
            </div>
          </div>
        </div>
        {/* team members */}
        <div className="py-10 ">
          <h1 className="text-center italic text-3xl text-primary font-semibold mb-10">
            Our Team Members
          </h1>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
            <div className="group">
              <div
                className="h-72 w-full bg-cover bg-top bg-no-repeat md:scale-90 group-hover:scale-100 duration-300 md:opacity-70 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${"https://i.ibb.co/ng4dgB7/member1.jpg"})`,
                }}
              >
                <div className="h-full bg-primary opacity-20"></div>
              </div>
              <div className="text-center">
                <h1 className="text-primary text-2xl">Jhon Smith</h1>
                <p>Designer</p>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 duration-300">
                <div className="flex justify-center space-x-4 mt-3 ">
                  <FiFacebook className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiTwitter className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiInstagram className="cursor-pointer hover:text-primary text-xl duration-300" />
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="h-72 w-full bg-cover bg-top bg-no-repeat md:scale-90 group-hover:scale-100 duration-300 md:opacity-70 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${"https://i.ibb.co/pQpqNrZ/member2.jpg"})`,
                }}
              >
                <div className="h-full bg-primary opacity-20"></div>
              </div>
              <div className="text-center">
                <h1 className="text-primary text-2xl">Gibs hornet</h1>
                <p>CEO</p>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 duration-300">
                <div className="flex justify-center space-x-4 mt-3 ">
                  <FiFacebook className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiTwitter className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiInstagram className="cursor-pointer hover:text-primary text-xl duration-300" />
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="h-72 w-full bg-cover bg-top bg-no-repeat md:scale-90 group-hover:scale-100 duration-300 md:opacity-70 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${"https://i.ibb.co/djqgkT5/member3.jpg"})`,
                }}
              >
                <div className="h-full bg-primary opacity-20"></div>
              </div>
              <div className="text-center">
                <h1 className="text-primary text-2xl">Tail cooks</h1>
                <p>Art-Maneger</p>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 duration-300">
                <div className="flex justify-center space-x-4 mt-3 ">
                  <FiFacebook className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiTwitter className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiInstagram className="cursor-pointer hover:text-primary text-xl duration-300" />
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="h-72 w-full bg-cover bg-top bg-no-repeat md:scale-90 group-hover:scale-100 duration-300 md:opacity-70 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${"https://i.ibb.co/X5S9VST/member4.jpg"})`,
                }}
              >
                <div className="h-full bg-primary opacity-20"></div>
              </div>
              <div className="text-center">
                <h1 className="text-primary text-2xl">Kim tail</h1>
                <p>Co-Founder</p>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 duration-300">
                <div className="flex justify-center space-x-4 mt-3 ">
                  <FiFacebook className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiTwitter className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiInstagram className="cursor-pointer hover:text-primary text-xl duration-300" />
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="h-72 w-full bg-cover bg-top bg-no-repeat md:scale-90 group-hover:scale-100 duration-300 md:opacity-70 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${"https://i.ibb.co/rvw9Zxd/member5.jpg"})`,
                }}
              >
                <div className="h-full bg-primary opacity-20"></div>
              </div>
              <div className="text-center">
                <h1 className="text-primary text-2xl">Jim Carry</h1>
                <p>Designer</p>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 duration-300">
                <div className="flex justify-center space-x-4 mt-3 ">
                  <FiFacebook className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiTwitter className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiInstagram className="cursor-pointer hover:text-primary text-xl duration-300" />
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="h-72 w-full bg-cover bg-top bg-no-repeat md:scale-90 group-hover:scale-100 duration-300 md:opacity-70 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${"https://i.ibb.co/HrJQTnT/member6.jpg"})`,
                }}
              >
                <div className="h-full bg-primary opacity-20"></div>
              </div>
              <div className="text-center">
                <h1 className="text-primary text-2xl">Jhon Smith</h1>
                <p>Designer</p>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 duration-300">
                <div className="flex justify-center space-x-4 mt-3 ">
                  <FiFacebook className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiTwitter className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiInstagram className="cursor-pointer hover:text-primary text-xl duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* promises */}
      </div>
    </div>
  );
};

export default About;
