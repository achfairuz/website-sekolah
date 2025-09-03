import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { studentSchema } from "../validation/studentSchema";

function StudentForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(studentSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-4 bg-white p-4 rounded shadow'
    >
      <div>
        <input
          {...register("name")}
          placeholder='Nama Siswa'
          className='w-full border p-2 rounded'
        />
        <p className='text-red-500 text-sm'>{errors.name?.message}</p>
      </div>
      <div>
        <input
          {...register("email")}
          placeholder='Email'
          className='w-full border p-2 rounded'
        />
        <p className='text-red-500 text-sm'>{errors.email?.message}</p>
      </div>
      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        Tambah
      </button>
    </form>
  );
}

export default StudentForm;
