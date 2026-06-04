import toast from "react-hot-toast"
import { actionPostCompanyData } from "../action"

export const postCompanyData = async (v) => {
    return actionPostCompanyData(v,'/api/companies')
}