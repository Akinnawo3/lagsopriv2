import {useHistory} from "react-router-dom";
export let checkForPagination;
const PaginationHelperComponent = () => {
  const history = useHistory();
  checkForPagination = "history";
};
export default PaginationHelperComponent;
