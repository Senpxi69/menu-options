import React, { useState } from 'react'

function TextArea() {

    return (
        <div className="mx-auto p-4 rounded-lg shadow-lg w-full max-w-xl mt-4">
            <label htmlFor="Languages" className="block mb-2">Choose a Language</label>

            <select id="Languages" name="languages" className="w-full bg-gray-100 border border-gray-300 focus:border-green-500 focus:outline-none rounded-md p-2">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
            </select>

            <div className="mt-4">
                <textarea id="text" className="w-full h-32 bg-gray-100 border border-gray-300 focus:border-green-500 focus:outline-none rounded-md p-2" placeholder="Enter text here..."></textarea>
            </div>



            <div className="flex justify-end mt-4">
                <button className="px-4 py-2 text-white rounded-md focus:outline-none" style={{ background: 'gray' }}>Submit</button>
            </div>
        </div>

    )
}

export default TextArea