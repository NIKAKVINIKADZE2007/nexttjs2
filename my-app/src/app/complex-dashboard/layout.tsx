export default function ComplexDashboardLayout({
  children,
  admin,
  users,
  notification,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
}) {
  return (
    <div>
      <h1>{children}</h1>
      <div>{admin}</div>
      <div>{users}</div>
      <div>{notification}</div>
    </div>
  );
}
