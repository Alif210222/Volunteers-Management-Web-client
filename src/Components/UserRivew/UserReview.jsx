// components/UserReviewSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const reviews = [
  {
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    comment: "Amazing service! I am super satisfied.",
  },
  {
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    comment: "The experience was wonderful and smooth!",
  },
  {
    name: "Ali Khan",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    comment: "I would definitely recommend to others.",
  },
  {
    name: "Ali Khan",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    comment: "I would definitely recommend to others.",
  },
  {
    name: "Ali Khan",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    comment: "I would definitely recommend to others.",
  },

];

const UserReviewSlider = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-20 my-20 ">
      <h2 className="text-center text-3xl font-bold underline   mb-10">What Our Users Say</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((user, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black  shadow-lg rounded-2xl p-6 text-center space-y-4">
              <img
                src={user.photo}
                alt={user.name}
                className="w-20 h-20 mx-auto rounded-full border-2 border-indigo-500"
              />
              <h3 className="font-semibold text-lg text-white">{user.name}</h3>
              <p className="text-white">{user.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UserReviewSlider;