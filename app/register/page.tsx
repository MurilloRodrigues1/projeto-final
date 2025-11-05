import RegisterForm from "@/components/register-form";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Crie sua conta</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
