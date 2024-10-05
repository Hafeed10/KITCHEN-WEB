# Generated by Django 5.0.1 on 2024-10-05 06:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='created',
        ),
        migrations.AddField(
            model_name='item',
            name='description',
            field=models.CharField(default=2, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='item',
            name='image',
            field=models.ImageField(blank=True, upload_to='image'),
        ),
        migrations.AlterField(
            model_name='item',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
