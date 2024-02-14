"use client";
import { PageWrapper } from "@/app/page-wrapper";

export default function ContactPage() {
    return (
        <div className="container mx-auto">
            <PageWrapper>
                <div className="bg-[#111111] rounded-lg border border-white border-opacity-[.08]">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 p-5">
                        <div>
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Contact Page
                            </h2>
                            <p className="mt-4">
                                The walnut wood card tray is precision milled to perfectly fit
                                a stack of Focus cards. The powder coated steel divider
                                separates active cards from new ones, or can be used to
                                archive important task lists.
                            </p>
                        </div>

                    </div>
                </div>
            </PageWrapper>
        </div>
    );
}
