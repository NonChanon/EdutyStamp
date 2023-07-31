function StatusBox({ title, value }: any) {
  return (
    <div className="bg-white p-1 flex justify-between items-center h-10 w-[205px] rounded m-[5px]">
      <span className="pl-2">{title}</span>
      <div className="w-[35px] h-[35px] bg-primary text-white rounded flex justify-center items-center">
        {value}
      </div>
    </div>
  );
}

export default StatusBox;
