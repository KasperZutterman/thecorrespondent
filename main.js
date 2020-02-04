$(document).ready(function () {
    $.ajax({
        url: "articles.csv",
        dataType: "text",
        success: function (data) {
            var article_data = data.split(/\r?\n|\r/);
            var table_data = '<table class="table table-bordered table-striped">';
            for (var count = 0; count < article_data.length; count++) {
                var cell_data = article_data[count].split(";");
                table_data += '<tr>';
                for (var cell_count = 1; cell_count < cell_data.length; cell_count++) {
                    if (count === 0) {
                        table_data += '<th>' + cell_data[cell_count] + '</th>';
                    }
                    else if (cell_count === 2) {
                        table_data += '<th><a href="' + cell_data[0] + '">' + cell_data[cell_count] + '</a></th>';
                    }
                    else {
                        table_data += '<td>' + cell_data[cell_count] + '</td>';
                    }
                }
                table_data += '</tr>';
            }
            table_data += '</table>';
            $('#article_table').html(table_data);
        }
    });

});