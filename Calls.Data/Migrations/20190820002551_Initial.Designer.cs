﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SamsCalls.Data;

namespace Calls.Data.Migrations
{
    [DbContext(typeof(CallContext))]
    [Migration("20190820002551_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SamsCalls.Data.Call", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AdditionalWorkAndNotes");

                    b.Property<string>("Address");

                    b.Property<int>("Ammout");

                    b.Property<string>("Appliance");

                    b.Property<string>("ApplianceLocation");

                    b.Property<string>("Brand");

                    b.Property<int>("Calls");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Landlord");

                    b.Property<string>("MethodOfPayment");

                    b.Property<string>("Name");

                    b.Property<string>("Neighborhood");

                    b.Property<string>("ReasonForReturn");

                    b.Property<string>("Type");

                    b.Property<string>("WorkPreformed");

                    b.Property<string>("Zip");

                    b.HasKey("Id");

                    b.ToTable("Calls");
                });
#pragma warning restore 612, 618
        }
    }
}
