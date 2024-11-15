import { Alert } from "@/components/ui/alert";

const CustomAlert = (status: any, title: String) => {
    return <Alert
        status={status}
        variant="subtle"
        title={title}
        marginBottom={4}
    />
}

export default CustomAlert;