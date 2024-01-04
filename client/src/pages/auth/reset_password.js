import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Reset Password</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="max-w-sm mx-auto">
                    <div className='py-3'>
                        <label htmlFor="old_password" className="block text-sm font-medium leading-6 text-gray-900">Old password</label>
                        <div className="mt-2">
                            <input
                                id="old_password"
                                name="old_password"
                                type="text"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className='py-3'>
                        <label htmlFor="new_password" className="block text-sm font-medium leading-6 text-gray-900">New password</label>
                        <div className="mt-2">
                            <input
                                id="new_password"
                                name="new_password"
                                type="text"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="text-sm">
                        <p className="font-semibold text-indigo-600 hover:text-gray-600 dark:text-gray-800"><Link to="/login">Back to login.</Link></p>
                    </div>

                    <div className='py-3'>
                        <button type="submit" className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:dark:bg-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-100">Reset password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
