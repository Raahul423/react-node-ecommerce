import { Button, Rating, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const LoadingProduct = ({ title }) => {
    return (
        <section>
            <div className="py-4">
                <h1 className="text-gray-900/90 text-2xl font-medium">{title}</h1>
            </div>

            <Swiper
                navigation
                loop={false}
                freeMode={false}
                spaceBetween={12}
                resistanceRatio={0}         
                watchOverflow={true}
                modules={[Navigation]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    640: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                        slidesPerGroup: 2,
                    },
                    1280: {
                        slidesPerView: 5,
                        slidesPerGroup: 2,
                    },
                }}
                className="mySwiper !overflow-hidden !p-2"
            >
                {Array.from({ length: 10 }).map((_, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="rounded-md shadow shadow-gray-500 md:w-60 w-40">
                            <div className="md:h-70 h-50 bg-gray-300 rounded-md shimmer" />

                            <div className="p-4 flex flex-col gap-2 animate-pulse">
                                <div className="h-4 bg-gray-300 rounded w-3/4" />
                                <div className="h-4 bg-gray-300 rounded w-1/2" />

                                <Stack spacing={1}>
                                    <div className="h-4 bg-gray-300 rounded w-20" />
                                </Stack>

                                <div className="flex justify-between gap-2">
                                    <div className="h-4 bg-gray-300 rounded w-16" />
                                    <div className="h-4 bg-gray-400 rounded w-16" />
                                </div>

                                <Button
                                    disabled
                                    className="w-full !bg-gray-300 !text-transparent"
                                >
                                    Loading
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
