import React, { useState, useEffect, useMemo } from "react";

interface Error {
  type: string;
}

interface InputProps {
  className?: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  register?: any;
  errors?: Error;
  required?: boolean;
  minLength?: number | undefined;
  maxLength?: number | undefined;
  showCharactersLeft?: boolean;
  automaticTextareaHeight?: boolean;
  defaultValue?: string | undefined;
  watch?: (names?: string | string[]) => unknown;
}

export default function Input({
  className = "",
  label = "",
  placeholder = "",
  register = () => {},
  type = "text",
  errors = undefined,
  required = false,
  minLength = undefined,
  maxLength = undefined,
  /**
   * if true the number left of characters will be shown (if maxLength & label props are set)
   */
  showCharactersLeft = false,
  /**
   * if true the textarea will take his content's height automatically
   */
  automaticTextareaHeight = false,
  defaultValue = undefined,
  name,
  /**
   * Use watch from react-hook-form if you want showCharactersLeft prop to work
   */
  watch = undefined,
  ...props
}: InputProps) {
  const [inputLength, setInputLength] = useState(defaultValue?.length || 0);
  const [textAreaValue, setTextAreaValue] = useState(defaultValue || "");

  const randomId = Math.round(Math.random() * Math.random() * 10);
  const watchInput = watch ? watch(name) : undefined;

  useEffect(() => {
    if (typeof watchInput === "string") setInputLength(watchInput.length);
  }, [watchInput]);

  const input = (
    <input
      id={name}
      name={name}
      type={type}
      className={`form-control${errors ? " error-input" : ""}${!label ? ` ${className}` : ""}`}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      onChange={(e) => setInputLength(e.target.value.length)}
      defaultValue={defaultValue}
      {...(register && {
        ...register(name, {
          required: { value: required },
          minLength: { value: minLength },
          maxLength: { value: maxLength }
        })
      })}
      {...props}
    />
  );
  const textarea = (
    <textarea
      id={name + randomId}
      name={name}
      className={`form-control${errors ? " error-input" : ""}${!label ? ` ${className}` : ""}`}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      rows={automaticTextareaHeight ? 1 : 3}
      onChange={(e) => {
        setInputLength(e.target.value.length);
        setTextAreaValue(e.target.value);
      }}
      defaultValue={defaultValue}
      {...(register && {
        ...register(name, {
          required: { value: required },
          minLength: { value: minLength },
          maxLength: { value: maxLength }
        })
      })}
      {...props}
    />
  );

  const labelDom = showCharactersLeft ? (
    <>
      {label}{" "}
      {maxLength && inputLength > 0 && (
        <span className={`text-sm ${maxLength * 0.1 >= maxLength - inputLength ? "text-danger" : "text-primary"}`}>
          ({maxLength - inputLength})
        </span>
      )}
    </>
  ) : (
    label
  );

  const field = type === "textarea" ? textarea : input;

  if (automaticTextareaHeight) {
    const textAreaRef: string | HTMLElement = useMemo(() => {
      const element = document.getElementById(name + randomId);
      return element || name + randomId;
    }, [textarea]);

    useAutosizeTextArea(textAreaRef, textAreaValue);
  }

  return (
    <>
      {label ? (
        <label
          htmlFor={type === "textarea" ? name + randomId : name}
          className={`${className}${type === "checkbox" ? " checkbox" : ""} d-block mb-3`}
        >
          {labelDom}
          {field}
        </label>
      ) : (
        field
      )}

      {errors && (
        <div className="mt-1 mb-1 text-danger">
          {errors.type === "required" && `${label || placeholder} is required.`}
          {errors.type === "maxLength" && `${label || placeholder} must have at least ${maxLength} characters`}
          {errors.type === "minLength" && `${label || placeholder} must be at least ${minLength} caracters long`}
        </div>
      )}
    </>
  );
}

const useAutosizeTextArea = (textAreaRef: string | HTMLElement, value: string) => {
  useEffect(() => {
    let ref = textAreaRef;
    if (typeof textAreaRef === "string") {
      const element = document.getElementById(textAreaRef);
      if (element) ref = element;
    }
    if (typeof ref !== "string") {
      ref.style.height = "0px";
      const scrollHeight = ref.scrollHeight;
      ref.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};
