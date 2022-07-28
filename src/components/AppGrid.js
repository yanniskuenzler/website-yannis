import AppIcon from "./AppIcon";

function AppGrid() {
    return (
        <div className="grid grid-cols-3 my-2 gap-2">
            <AppIcon appName="Rechner" endpoint="/taschenrechner" />
            <AppIcon appName="Todo Liste" endpoint="/todo-list" />
            <AppIcon appName="Test" endpoint="/taschenrechner" />
            <AppIcon appName="Test" endpoint="/taschenrechner" />
            <AppIcon appName="Test" endpoint="/taschenrechner" />
            <AppIcon appName="Test" endpoint="/taschenrechner" />
        </div>
    )
}

export default AppGrid;