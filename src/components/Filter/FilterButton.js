const FilterButton = ({ name, index, input, task, setPage }) => {
  return (
    <div>
      <style jsx="true">
        {`
          .x:checked + label {
            background-color: blue;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>{" "}
      <div className="form-check">
        <input
          className="form-check-input x mb-5"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input);
            setPage(1);
            //console.log("works");
          }}
          className="btn btn-outline-primary font-bold bg-white text-center rounded-lg px-2"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
