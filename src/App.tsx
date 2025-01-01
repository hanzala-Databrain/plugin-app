import "./App.css";

function App() {
  return (
    <div className="w-full h-full">
      <dbn-dashboard
        token={"feee48ee-7d16-4bf6-896d-deadbfb99f3f"}
        theme={JSON.stringify({
          colors: {
            primary: "#fff",
          },
        })}
        options={JSON.stringify({
          hideDashboardName: false,
          disableMetricCreation: false,
          disableScheduleEmailReports: false,
          disableLayoutCustomization: false,
          disableManageMetrics: false,
        })}
        dashboard-id={"plugin-test"}
        handle-server-event="databrainServerEvent"
      />
    </div>
  );
}

export default App;
