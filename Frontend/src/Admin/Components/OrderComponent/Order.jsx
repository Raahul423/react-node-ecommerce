
import { Button, Pagination, Stack } from '@mui/material';

const Order = () => {
  return (
      <section className='pl-75 pr-3 bg-gray-400/10 h-screen'>
            <div className='flex justify-between items-center py-6 px-5'>
                <h1 className='!text-2xl '>Recent Orders</h1>
            </div>




            <div class="relative overflow-x-auto bg-white shadow-xs rounded-base border border-default">
                <table class="w-full text-sm text-left rtl:text-right text-body">
                    <thead class="bg-slate-800/80 border-b border-default">
                        <tr>
                            <th scope="col" class="whitespace-nowrap px-6 py-3 font-medium">
                                ORDER ID
                            </th>
                            <th scope="col" class="whitespace-nowrap px-6 py-3 font-medium">
                                PAYMENT ID
                            </th>
                            <th scope="col" class="whitespace-nowrap px-6 py-3 font-medium">
                                NAME
                            </th>
                            <th scope="col" class="whitespace-nowrap px-6 py-3 font-medium">
                                PHONE NUMBER
                            </th>
                            <th scope="col" class="whitespace-nowrap px-6 py-3 font-medium">
                                ADDRESS
                            </th>
                            <th scope="col" class="whitespace-nowrap px-6 py-3 font-medium">
                                PINCODE
                            </th>
                            <th scope="col" class="whitespace-nowrap px-6 py-3 font-medium">
                                TOTAL AMOUNT
                            </th>
                            <th scope="col" class="whitespace-nowrap px-6 py-3 font-medium">
                                EMAIL ID
                            </th>
                            <th scope="col" class="whitespace-nowrap px-6 py-3 font-medium">
                                USER ID
                            </th>
                            <th scope="col" class="whitespace-nowrap px-6 py-3 font-medium">
                                ORDER STATUS
                            </th>
                            <th scope="col" class="whitespace-nowrap px-6 py-3 font-medium">
                                DATE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-slate-800 even:bg-slate-800 border-b border-default">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-blue-600/80">
                                6932f5a5228db479bbbeaefb
                            </th>
                            <td class="px-6 py-4 whitespace-nowrap text-blue-600/80">
                                CASH ON DELIVERY
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-white">
                                <p className='w-15 px-2 py-1 bg-white text-gray-600/80 text-center rounded-md' >Home</p>
                                <p className='whitespace-nowrap'>Jaipur Jaipur JAIpur Rajsthan India 918947889124</p>
                            </td>
                            <td class="px-6 py-4 text-white">
                                208007
                            </td>
                            <td class="px-6 py-4 text-white">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-white">
                                aksjdh@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                6932f5a5228db479bbbeaefb
                            </td>
                            <td class="px-6 py-4 text-white">
                                <p className='px-4 py-1 rounded-full bg-green-600/90 text-white text-center'>Confirm</p>
                            </td>
                            <td class="px-6 py-4 text-white whitespace-nowrap">
                                2025-12-05
                            </td>


                        </tr>

                        <tr class="bg-slate-800 even:bg-slate-800 border-b border-default">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-blue-600/80">
                                6932f5a5228db479bbbeaefb
                            </th>
                            <td class="px-6 py-4 whitespace-nowrap text-blue-600/80">
                                CASH ON DELIVERY
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-white">
                                <p className='w-15 px-2 py-1 bg-white text-gray-600/80 text-center rounded-md' >Home</p>
                                <p className='whitespace-nowrap'>Jaipur Jaipur JAIpur Rajsthan India 918947889124</p>
                            </td>
                            <td class="px-6 py-4 text-white">
                                208007
                            </td>
                            <td class="px-6 py-4 text-white">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-white">
                                aksjdh@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                6932f5a5228db479bbbeaefb
                            </td>
                            <td class="px-6 py-4 text-white">
                                <p className='px-4 py-1 rounded-full bg-green-600/90 text-white text-center'>Confirm</p>
                            </td>
                            <td class="px-6 py-4 text-white whitespace-nowrap">
                                2025-12-05
                            </td>


                        </tr>

                        <tr class="bg-slate-800 even:bg-slate-800 border-b border-default">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-blue-600/80">
                                6932f5a5228db479bbbeaefb
                            </th>
                            <td class="px-6 py-4 whitespace-nowrap text-blue-600/80">
                                CASH ON DELIVERY
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-white">
                                <p className='w-15 px-2 py-1 bg-white text-gray-600/80 text-center rounded-md' >Home</p>
                                <p className='whitespace-nowrap'>Jaipur Jaipur JAIpur Rajsthan India 918947889124</p>
                            </td>
                            <td class="px-6 py-4 text-white">
                                208007
                            </td>
                            <td class="px-6 py-4 text-white">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-white">
                                aksjdh@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                6932f5a5228db479bbbeaefb
                            </td>
                            <td class="px-6 py-4 text-white">
                                <p className='px-4 py-1 rounded-full bg-green-600/90 text-white text-center'>Confirm</p>
                            </td>
                            <td class="px-6 py-4 text-white whitespace-nowrap">
                                2025-12-05
                            </td>


                        </tr>

                        <tr class="bg-slate-800 even:bg-slate-800 border-b border-default">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-blue-600/80">
                                6932f5a5228db479bbbeaefb
                            </th>
                            <td class="px-6 py-4 whitespace-nowrap text-blue-600/80">
                                CASH ON DELIVERY
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-white">
                                <p className='w-15 px-2 py-1 bg-white text-gray-600/80 text-center rounded-md' >Home</p>
                                <p className='whitespace-nowrap'>Jaipur Jaipur JAIpur Rajsthan India 918947889124</p>
                            </td>
                            <td class="px-6 py-4 text-white">
                                208007
                            </td>
                            <td class="px-6 py-4 text-white">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-white">
                                aksjdh@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                6932f5a5228db479bbbeaefb
                            </td>
                            <td class="px-6 py-4 text-white">
                                <p className='px-4 py-1 rounded-full bg-green-600/90 text-white text-center'>Confirm</p>
                            </td>
                            <td class="px-6 py-4 text-white whitespace-nowrap">
                                2025-12-05
                            </td>


                        </tr>

                        <tr class="bg-slate-800 even:bg-slate-800 border-b border-default">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-blue-600/80">
                                6932f5a5228db479bbbeaefb
                            </th>
                            <td class="px-6 py-4 whitespace-nowrap text-blue-600/80">
                                CASH ON DELIVERY
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-white">
                                <p className='w-15 px-2 py-1 bg-white text-gray-600/80 text-center rounded-md' >Home</p>
                                <p className='whitespace-nowrap'>Jaipur Jaipur JAIpur Rajsthan India 918947889124</p>
                            </td>
                            <td class="px-6 py-4 text-white">
                                208007
                            </td>
                            <td class="px-6 py-4 text-white">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-white">
                                aksjdh@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                6932f5a5228db479bbbeaefb
                            </td>
                            <td class="px-6 py-4 text-white">
                                <p className='px-4 py-1 rounded-full bg-green-600/90 text-white text-center'>Confirm</p>
                            </td>
                            <td class="px-6 py-4 text-white whitespace-nowrap">
                                2025-12-05
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
            <Stack spacing={2} className='py-5 items-center'>
                <Pagination count={10} shape="rounded" />
            </Stack>

        </section>
  )
}

export default Order