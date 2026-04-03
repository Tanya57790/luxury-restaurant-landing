'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, type InferSchema } from '@/lib/schema';
import { inputs } from './data';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InferSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<InferSchema> = async (data) => {
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      className="w-[279px] sm:w-[598px] lg:w-max xl:w-[630px] 2xl:w-[800px]"
    >
      <div className="grid sm:grid-cols-[1fr_1fr] sm:gap-[50px_20px] sm:pb-13">
        {inputs.map((input) => {
          const fieldName = input.name as keyof InferSchema;
          const error = errors[fieldName];

          return (
            <p key={input.id} className="relative flex flex-col py-2">
              <label htmlFor={input.name} className="text-[#F7F7F7] pb-5 font-inter medium">
                {input.label}
              </label>
              <input
                type={input.type}
                {...register(`${input.name as keyof InferSchema}`)}
                placeholder={input.placeholder}
                id={input.name}
                autoComplete={input.autocomplete}
                className="text-[#777777] pb-2.5 font-inter border-b-2 border-b-[#F7F7F7] focus:outline-none"
              />
              {error && (
                <span className="absolute bottom-[-15px] text-red-500 text-sm">
                  {error?.message}
                </span>
              )}
            </p>
          );
        })}
      </div>
      <p className="relative flex flex-col flex-wrap py-2">
        <label htmlFor="userMessage" className="text-[#F7F7F7] pb-5 font-inter medium">
          Your Message *
        </label>
        <textarea
          {...register('userMessage')}
          placeholder="Input message"
          id="userMessage"
          autoComplete="on"
          className="text-[#777777] pb-2.5 h-33 font-inter border-b-2 border-b-[#F7F7F7] focus:outline-none resize-none"
        />
        {errors.userMessage && (
          <span className="absolute bottom-[-15px] text-red-500 text-sm">
            {errors.userMessage.message}
          </span>
        )}
      </p>
      <input
        type="submit"
        className="bg-[#F7F7F7] mt-6 w-[90px] h-[40px] md:w-[100px] md:h-[45px] 2xl:w-[110px] 2xl:h-[50px] bg-[#1F2122] font-inter sm:text-[15px] 2xl:text-[17px] medium cursor-pointer 
        hover:bg-gray-400 active:bg-gray-600 transition-all duration-200 ease-in-out"
        value={isSubmitting ? 'Submitting...' : 'Submit'}
      />
    </form>
  );
};

export default Form;
