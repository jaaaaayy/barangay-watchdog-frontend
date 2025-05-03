import AuditLogList from "./audit-log-list";

const AuditLogs = () => {
  return (
    <div className="p-2 lg:p-4">
      <h1 className="text-xl font-semibold mb-4">Audit Logs</h1>
      <AuditLogList />
    </div>
  );
};

export default AuditLogs;
