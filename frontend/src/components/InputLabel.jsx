// eslint-disable-next-line react/prop-types
const InputLabel = ({ label, type, placeholder, onChange, value }) => {
  return (
    <div>
      <label className="label p-2">
        <span className="text-base label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered input-primary w-full"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputLabel;
