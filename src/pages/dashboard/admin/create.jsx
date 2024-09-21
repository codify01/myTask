import React from "react";
import BtnOne from "../../../components/Buttons/BtnOne";

const Createtask = () => {

    return (

        <div className="general grid place-content-center h-max">
            <div className="flex items-center w-full mb-4 justify-center">
				<h1 className="md:basis-1/3 basis-2/3 text-4xl font-bold">Create Tasks</h1>
				<hr className="hidden md:block border border-accent-black dark:border-accent-white rounded-full basis-2/3" />
			</div>
            <form action="" className="flex mx-auto flex-wrap items-center justify-between w-90% max-w-[100%]">
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label for="">Title</label>
                    <input className="my-3 p-3 input-bg bg-neutral-200 input-styles" type="text" />
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label for="">Image</label>
                    <input className="my-3 p-2 input-bg input-styles" type="file" />
                </div>
                <div className="flex flex-col w-full">
                    <label for="des">Description</label>
                    <textarea name="des" id="des" cols="30" rows="5" className="resize-none my-3 p-3 input-bg input-styles"></textarea>
                </div>
                <div className="md:w-[48.5%] w-full flex flex-col">
                    <label for="">Due Date</label>
                    <input className="my-3 p-3 input-bg input-styles" type="date" />
                </div>
                <div className="md:w-[48.5%] w-full flex flex-col">
                    <label for="">Duration</label>
                    <input className="my-3 p-3 input-bg input-styles" type="time" />
                </div>
                <div className="md:w-[48.5%] w-full flex flex-col">
                    <label for="">Priority</label>
                    <div className="radio-inputs my-3 p-1 flex flex-wrap gap-3 relative input-bg input-styles text-sm">
                        <label className="radio">
                            <input type="radio" name="radio" className="hidden" checked />
                            <span className="name">Low</span>
                        </label>
                        <label className="radio">
                            <input type="radio" name="radio" className="hidden" />
                            <span className="name">Medium</span>
                        </label>   
                        <label className="radio">
                            <input type="radio" name="radio" className="hidden" />
                            <span className="name">High</span>
                        </label>
                    </div>
                </div>
                <div className="md:w-[48.5%] w-full flex flex-col">
                    <label for="tMod">Task Moderator</label>
                    <select name="tMod" id="tMod" className="my-3 p-3 input-bg input-styles">
                        <option value="Big Dev.">Big Dev.</option>
                        <option value="Big Dev.">Big Dev.</option>
                        <option value="Big Dev.">Big Dev.</option>
                        <option value="Big Dev.">Big Dev.</option>
                    </select>
                </div>
                <BtnOne name={"Assign"} style={'mx-auto my-3 py-3 border-0 md:w-1/5 w-1/3 rounded-md justify-center bg-pry'}/>
            </form>
        </div>

    )

}


export default Createtask;