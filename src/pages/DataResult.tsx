import { Icon } from "@iconify/react";
import { Button } from "../components/Button";
import Input from "../components/Input";
import StatusBox from "../components/StatusBox";

export default function DataResult() {
  return (
    <div className="w-full mx-auto px-5 my-[70px] text-xs">
      <div className="lg:flex lg:justify-between lg:items-center">
        <span className="font-[600] text-lg">Batch Data Rusult</span>
        <div className="flex lg:justify-between mt-10 lg:mt-0">
          <Input placeholder="Batch Date: DD/MM/YYYY" className="flex" />
          <Input className="mx-[10px]" placeholder="Lot Name" />
          <Button variant={"center"} size={"square"}>
            <Icon icon="tabler:search" className="text-[16px]" />
          </Button>
        </div>
      </div>
      <div className="mt-10 mb-5 flex bg-[#F9F9F9] w-fit rounded">
        <StatusBox title={"All"} value={"20"} />
        <StatusBox title={"Pending"} value={"10"} classNameName="pl-2" />
        <StatusBox title={"Invalid Data"} value={"5"} classNameName="pl-2" />
      </div>
      <div className="w-full p-5 border-[#F9F9F9] border-2">
        <span className="text-[14px]">Batch Date : 18/07/2023</span>
        <div className="relative overflow-x-auto mt-5">
          <table className="w-full text-center border-b border-[#DFDFDF]">
            <thead className="text-xs text-[#818181] border-b border-[#DFDFDF]">
              <tr>
                <th className="px-6 py-4">No.</th>
                <th className="px-6 py-4">Lot Name</th>
                <th className="px-6 py-4">Approved By</th>
                <th className="px-6 py-4">Last Update Date</th>
                <th className="px-6 py-4">Total Doc</th>
                <th className="px-6 py-4">Total Payment</th>
                <th className="px-6 py-4">Total Duty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
