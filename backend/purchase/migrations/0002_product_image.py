# Generated by Django 3.0.2 on 2020-01-28 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('purchase', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(default='l', upload_to='./images'),
            preserve_default=False,
        ),
    ]
