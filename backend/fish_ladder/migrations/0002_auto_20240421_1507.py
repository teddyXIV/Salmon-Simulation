# Generated by Django 5.0.4 on 2024-04-21 22:07

from django.db import migrations

def create_dams(apps, schema_editor):
    Dam = apps.get_model('fish_ladder', 'Dam')
    Dam.objects.bulk_create([
        Dam(name='bonneville'),
        Dam(name='the_dalles'),
        Dam(name='john_day'),
        Dam(name='mcnary'),
        Dam(name='priest_rapids'),
        Dam(name='wanapum'),
        Dam(name='rock_island'),
        Dam(name='rocky_reach'),
        Dam(name='wells'),
    ])

class Migration(migrations.Migration):

    dependencies = [
        ('fish_ladder', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_dams)
    ]