using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Calls.Data.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Calls",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Zip = table.Column<string>(nullable: true),
                    Neighborhood = table.Column<string>(nullable: true),
                    Landlord = table.Column<string>(nullable: true),
                    Appliance = table.Column<string>(nullable: true),
                    Brand = table.Column<string>(nullable: true),
                    ApplianceLocation = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    WorkPreformed = table.Column<string>(nullable: true),
                    AdditionalWorkAndNotes = table.Column<string>(nullable: true),
                    Calls = table.Column<int>(nullable: true),
                    ReasonForReturn = table.Column<string>(nullable: true),
                    Ammout = table.Column<int>(nullable: false),
                    MethodOfPayment = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calls", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Calls");
        }
    }
}
