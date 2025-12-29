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
                slidesPerGroup={2}
                slidesPerView={6}
                spaceBetween={12}
                modules={[Navigation]}
                className="mySwiper"
            >
                {Array.from({ length: 10 }).map((_, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="rounded-md shadow shadow-gray-500 w-60">
                            <div className="h-70 bg-gray-300 rounded-md shimmer" />

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
