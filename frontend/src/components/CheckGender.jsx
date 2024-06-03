// eslint-disable-next-line react/prop-types
const CheckGender = ({ onChangeGender, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer ">
          <span>Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            onChange={() => onChangeGender("male")}
            checked={selectedGender === "male"}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer ">
          <span>Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            onChange={() => onChangeGender("female")}
            checked={selectedGender === "female"}
          />
        </label>
      </div>
    </div>
  );
};

export default CheckGender;
