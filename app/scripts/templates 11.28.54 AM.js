Templates = {}; 

	Templates.maplocation = [
 
        "<% _.each(mymap,function(data,index,list){ %>",
            "<input id=\"newlocationaddress\" type=\"text\" value=<%=\"\"%>>",
            "<input id=\"newcity type=\"text\" value=<%=\"\"%>>",
            "<option class=\"newstate\"><%= mymap.state %></option>",
        "<% }); %>"
	].join("\n");